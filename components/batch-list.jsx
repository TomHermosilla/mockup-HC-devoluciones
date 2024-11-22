'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { FolderOpen, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BatchList({ batches, selectedBatch, onSelectBatch }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Batches</h2>
        <Button variant="outline" size="sm">
          <FolderOpen className="h-4 w-4 mr-2" />
          Nuevo Batch
        </Button>
      </div>
      
      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-2">
          {batches.map((batch) => {
            const hasDiscrepancy = batch.coverSheet.expectedDocuments !== batch.documentsFound;
            
            return (
              <Button
                key={batch.id}
                variant="ghost"
                className={cn(
                  'w-full justify-start',
                  selectedBatch === batch.id && 'bg-accent'
                )}
                onClick={() => onSelectBatch(batch.id)}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-col items-start">
                    <span className="font-medium">{batch.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {batch.documentsFound} de {batch.coverSheet.expectedDocuments} documentos
                    </span>
                  </div>
                  {hasDiscrepancy ? (
                    <Badge variant="destructive" className="ml-2">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      Revisar
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="ml-2">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      OK
                    </Badge>
                  )}
                </div>
              </Button>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}