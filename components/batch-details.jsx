'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { returnReasons } from '@/lib/mock-data';
import { AlertCircle, Eye, Save } from 'lucide-react';
import Image from 'next/image';

export default function BatchDetails({ batch }) {
  const [expectedDocs, setExpectedDocs] = useState(batch.coverSheet.expectedDocuments);
  const [documents, setDocuments] = useState(batch.documents);
  
  const handleSaveExpectedDocs = () => {
    // Aquí iría la lógica para guardar el nuevo valor
    console.log('Guardando nuevo valor:', expectedDocs);
  };

  const handleUpdateDocument = (docId, field, value) => {
    setDocuments(docs => 
      docs.map(doc => 
        doc.id === docId ? { ...doc, [field]: value } : doc
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{batch.name}</h2>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Guardar Cambios
        </Button>
      </div>

      <div className="p-4 border rounded-lg bg-muted/50">
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <Label htmlFor="expectedDocs">Documentos Esperados (Carátula)</Label>
            <Input
              id="expectedDocs"
              type="number"
              value={expectedDocs}
              onChange={(e) => setExpectedDocs(e.target.value)}
            />
          </div>
          <Button onClick={handleSaveExpectedDocs}>Actualizar</Button>
        </div>
        
        {batch.coverSheet.expectedDocuments !== batch.documentsFound && (
          <div className="flex items-center gap-2 mt-4 text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>Discrepancia: {batch.documentsFound} documentos encontrados vs {batch.coverSheet.expectedDocuments} esperados</span>
          </div>
        )}
      </div>

      <ScrollArea className="h-[400px] border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código de Barras</TableHead>
              <TableHead>Motivo de Devolución</TableHead>
              <TableHead>Confianza OCR</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>
                  <Input
                    value={doc.barcode}
                    onChange={(e) => handleUpdateDocument(doc.id, 'barcode', e.target.value)}
                  />
                  {doc.barcode !== doc.originalOcrData.barcode && (
                    <span className="text-xs text-muted-foreground block mt-1">
                      Original: {doc.originalOcrData.barcode}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <Select
                    value={doc.returnReason || ''}
                    onValueChange={(value) => handleUpdateDocument(doc.id, 'returnReason', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sin motivo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Sin motivo</SelectItem>
                      {returnReasons.map((reason) => (
                        <SelectItem key={reason} value={reason}>
                          {reason}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      doc.ocrConfidence > 0.9 ? 'bg-green-500' :
                      doc.ocrConfidence > 0.8 ? 'bg-yellow-500' :
                      'bg-red-500'
                    }`} />
                    {Math.round(doc.ocrConfidence * 100)}%
                  </div>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Vista Previa del Documento</DialogTitle>
                      </DialogHeader>
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={doc.imageUrl}
                          alt="Vista previa del documento"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
}