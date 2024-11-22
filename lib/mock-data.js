export const mockBatches = [
  {
    id: 'B001',
    name: 'Batch #001',
    coverSheet: {
      expectedDocuments: 15,
      scanDate: '2024-03-15',
      batchNumber: 'B001',
    },
    documents: [
      {
        id: 'DOC001-1',
        barcode: '789012345678',
        returnReason: 'Dirección incorrecta',
        ocrConfidence: 0.95,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '789012345678',
          returnReason: 'Direccion incorrecta'
        }
      },
      {
        id: 'DOC001-2',
        barcode: '123456789012',
        returnReason: null,
        ocrConfidence: 0.88,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '12345678901X', // Example of OCR error
          returnReason: null
        }
      }
    ],
    status: 'pending',
    documentsFound: 2 // Mismatch with expectedDocuments for validation
  },
  {
    id: 'B002',
    name: 'Batch #002',
    coverSheet: {
      expectedDocuments: 8,
      scanDate: '2024-03-15',
      batchNumber: 'B002',
    },
    documents: [
      {
        id: 'DOC002-1',
        barcode: '456789012345',
        returnReason: 'Destinatario desconocido',
        ocrConfidence: 0.92,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '456789012345',
          returnReason: 'Destinatario desconocido'
        }
      },
      {
        id: 'DOC002-2',
        barcode: '567890123456',
        returnReason: 'Dirección inexistente',
        ocrConfidence: 0.97,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '567890123456',
          returnReason: 'Dirección inexistente'
        }
      },
      {
        id: 'DOC002-3',
        barcode: '678901234567',
        returnReason: null,
        ocrConfidence: 0.85,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '678901234567',
          returnReason: ''
        }
      }
    ],
    status: 'pending',
    documentsFound: 3
  },
  {
    id: 'B003',
    name: 'Batch #003',
    coverSheet: {
      expectedDocuments: 5,
      scanDate: '2024-03-15',
      batchNumber: 'B003',
    },
    documents: [
      {
        id: 'DOC003-1',
        barcode: '890123456789',
        returnReason: 'Mudado',
        ocrConfidence: 0.94,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '890123456789',
          returnReason: 'Mudado'
        }
      },
      {
        id: 'DOC003-2',
        barcode: '901234567890',
        returnReason: 'Rechazado',
        ocrConfidence: 0.91,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '901234567890',
          returnReason: 'Rechazado'
        }
      },
      {
        id: 'DOC003-3',
        barcode: '012345678901',
        returnReason: null,
        ocrConfidence: 0.89,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '012345678901',
          returnReason: null
        }
      },
      {
        id: 'DOC003-4',
        barcode: '123456789012',
        returnReason: 'Fallecido',
        ocrConfidence: 0.96,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '123456789012',
          returnReason: 'Fallecido'
        }
      },
      {
        id: 'DOC003-5',
        barcode: '234567890123',
        returnReason: null,
        ocrConfidence: 0.93,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '234567890123',
          returnReason: null
        }
      }
    ],
    status: 'pending',
    documentsFound: 5
  },
  {
    id: 'B004',
    name: 'Batch #004',
    coverSheet: {
      expectedDocuments: 10,
      scanDate: '2024-03-15',
      batchNumber: 'B004',
    },
    documents: [
      {
        id: 'DOC004-1',
        barcode: '345678901234',
        returnReason: 'No reside',
        ocrConfidence: 0.90,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '345678901234',
          returnReason: 'No reside'
        }
      },
      {
        id: 'DOC004-2',
        barcode: '456789012345',
        returnReason: null,
        ocrConfidence: 0.87,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '456789012345',
          returnReason: null
        }
      }
    ],
    status: 'pending',
    documentsFound: 2
  },
  {
    id: 'B005',
    name: 'Batch #005',
    coverSheet: {
      expectedDocuments: 12,
      scanDate: '2024-03-15',
      batchNumber: 'B005',
    },
    documents: [
      {
        id: 'DOC005-1',
        barcode: '567890123456',
        returnReason: 'Dirección incompleta',
        ocrConfidence: 0.89,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '567890123456',
          returnReason: 'Direccion incompleta'
        }
      },
      {
        id: 'DOC005-2',
        barcode: '678901234567',
        returnReason: 'Se mudó',
        ocrConfidence: 0.95,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '678901234567',
          returnReason: 'Se mudo'
        }
      },
      {
        id: 'DOC005-3',
        barcode: '789012345678',
        returnReason: null,
        ocrConfidence: 0.92,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '789012345678',
          returnReason: null
        }
      }
    ],
    status: 'pending',
    documentsFound: 3
  },
  {
    id: 'B006',
    name: 'Batch #006',
    coverSheet: {
      expectedDocuments: 7,
      scanDate: '2024-03-15',
      batchNumber: 'B006',
    },
    documents: [
      {
        id: 'DOC006-1',
        barcode: '890123456789',
        returnReason: 'No existe número',
        ocrConfidence: 0.88,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '890123456789',
          returnReason: 'No existe numero'
        }
      },
      {
        id: 'DOC006-2',
        barcode: '901234567890',
        returnReason: 'Desconocido',
        ocrConfidence: 0.93,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '901234567890',
          returnReason: 'Desconocido'
        }
      },
      {
        id: 'DOC006-3',
        barcode: '012345678901',
        returnReason: null,
        ocrConfidence: 0.91,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '012345678901',
          returnReason: null
        }
      },
      {
        id: 'DOC006-4',
        barcode: '123456789012',
        returnReason: 'Rechazado',
        ocrConfidence: 0.94,
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
        originalOcrData: {
          barcode: '123456789012',
          returnReason: 'Rechazado'
        }
      }
    ],
    status: 'pending',
    documentsFound: 4
  }
];

export const returnReasons = [
  'Dirección incorrecta',
  'Dirección inexistente',
  'Dirección incompleta',
  'Destinatario desconocido',
  'No reside',
  'Se mudó',
  'Fallecido',
  'Rechazado',
  'No existe número',
  'Mudado',
  'Desconocido',
  'Otro'
];