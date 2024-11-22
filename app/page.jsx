'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import BatchList from '@/components/batch-list';
import BatchDetails from '@/components/batch-details';
import { ThemeToggle } from '@/components/theme-toggle';
import { Inbox } from 'lucide-react';
import { mockBatches } from '@/lib/mock-data';

export default function Home() {
  const [selectedBatch, setSelectedBatch] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="flex items-center space-x-2">
            <Inbox className="h-6 w-6" />
            <h1 className="text-xl font-bold">Sistema de Auditoría OCR</h1>
          </div>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Tabs defaultValue="audit" className="space-y-4">
          <TabsList>
            <TabsTrigger value="audit">Auditoría</TabsTrigger>
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
          </TabsList>

          <TabsContent value="audit" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <Card className="md:col-span-4 p-4">
                <BatchList 
                  batches={mockBatches}
                  selectedBatch={selectedBatch}
                  onSelectBatch={setSelectedBatch}
                />
              </Card>

              <Card className="md:col-span-8 p-4">
                {selectedBatch ? (
                  <BatchDetails 
                    batch={mockBatches.find(b => b.id === selectedBatch)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
                    <Inbox className="h-12 w-12 mb-4" />
                    <p>Seleccione un batch para ver sus detalles</p>
                  </div>
                )}
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <Card className="p-4">
              <h2 className="text-2xl font-bold mb-4">Estadísticas</h2>
              {/* Add your statistics components here */}
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}