// あなたは開発チームに所属しており、企業用向けのクラウドシステムを構築するタスクを与えられました。
// このソフトウェアの一部には、ユーザーがファイルを保存したり、読み書きできる機能が含まれています。
// ファイルを共有することもできるので、ユーザーは上書きがないように自分のファイルをロックする機能もついています。
// 以下に従って、Files クラスを作成し、テストケースを出力してください。

// String fileName: ファイル名
// String fileExtension: ファイルの拡張子。.word、.png、.mp4、.pdf でない場合は、.txt に設定されます。
// String content: ファイルに含まれるコンテンツ
// String parentFolder: ファイルが置かれているフォルダの名前
// String getLifetimeBandwidthSize(): サービス中に使われるファイルの最大容量を返します。content に含まれる文字（空白文字も含む）につき、25MB として計算してください。例えば、40 文字含まれている場合、40 * 25MB = 1,000MB = 1GBになります。単位の最大はG（ギガ）とします。1000MB　以上は単位を GB に変換してください。
// String prependContent(String data): ファイルの content の先頭にデータ文字列を追加し、新しい content を返します。
// String addContent(String data, int position): ファイルの content の指定した位置（インデックス）にデータ文字列を追加し、新しい content を返します。
// String showFileLocation(): 親ファイル > ファイル名.拡張子という形で返します

class Files {
  filename: string
  fileExtension: string
  content: string
  parentFolder: string

  constructor(filename: string, fileExtension: string, content: string, parentFolder: string) {
      this.filename = filename
      if (['.word', '.png', '.mp4', '.pdf'].indexOf(fileExtension) >= 0) {
          this.fileExtension = fileExtension;
      } else {
          this.fileExtension = '.txt';
      }
      this.content = content
      this.parentFolder = parentFolder
  }

  getLifetimeBandwidthSize():string {
      const sizeMb = this.content.length * 25
      return sizeMb < 1000 ? sizeMb.toString() + 'MB' : (sizeMb / 1000).toString() + 'GB'
  }

  prependContent(data: string):string {
      return this.content = data + this.content
  }

  addContent(data: string, position: number):string {
      return this.content = this.content.slice(0, position) + data + this.content.slice(position)
  }

  showFileLocation(): string {
      return this.parentFolder + ' > ' + this.filename + this.fileExtension
  }
}

const assignment = new Files("assignment", ".word", "ABCDEFGH", "homework")
console.log(assignment.getLifetimeBandwidthSize())
console.log(assignment.prependContent("MMM"))
console.log(assignment.addContent("hello world", 5))
console.log(assignment.showFileLocation())

const blade = new Files("blade", ".php", "bg-primary text-white m-0 p-0 d-flex justify-content-center", "view")
console.log(blade.getLifetimeBandwidthSize())
console.log(blade.addContent("font-weight-bold ", 11))
console.log(blade.showFileLocation())