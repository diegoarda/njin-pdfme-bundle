# My Vite Project

This project is a Vite application that utilizes the PDFMe libraries for generating and handling PDF documents.

## Dependencies

This project includes the following dependencies:
- `@pdfmeme/common`
- `@pdfme/generator`
- `@pdfme/schema`

## Setup

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-vite-project
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

## Usage

The entry point of the application is located in `src/main.ts`. This file imports the necessary modules from the PDFMe libraries and reexports them under a global variable `PDFMe`.

## Development

For any changes or contributions, please follow the standard practices for development. Ensure that you run the TypeScript compiler and Vite build process to verify your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.