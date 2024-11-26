export class File implements IFile {
  id: string;
  name: string;
  fullName: string;
  extention: string;
  path: string;
  created_at: Date;

  constructor(json?: any) {
    if (json) {
      Object.assign(this, json);
    }
  }

  //TODO Buscar um arquivo pelo ID e retornar um File
  getFile(id: string): File {
    console.warn(`CRIAR MÉTODO | Carregar Arquivo pelo ID: ${id}`);
    return new File();
  }

  //TODO Buscar o caminho do arquivo pelo ID
  getFilePath(id: string): string {
    console.warn(`CRIAR MÉTODO | Carregar caminho do Arquivo pelo ID: ${id}`);
    return 'exemplo-de-caminho-de-arquivo.xml';
  }
}

export interface IFile {
  id: string;
  name: string;
  fullName: string;
  extention: string;
  path: string;
  created_at: Date;

  getFile(id: string): File;
  getFilePath(id: string): string;
}
