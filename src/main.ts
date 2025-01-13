// src/main.ts
import * as Common from '@pdfme/common';
import * as Generator from '@pdfme/generator';
import * as Schema from '@pdfme/schemas';

(window as any).PDFMe = {
    common: {...Common},
    generator: {...Generator},
    schemas: {...Schema},
};