import { Component, OnInit, Pipe, PipeTransform, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

export interface DialogData {
  url: string;
}

@Component({
  selector: 'app-demo-videos',
  templateUrl: './demo-videos.component.html',
  styleUrls: ['./demo-videos.component.css']
})
export class DemoVideosComponent implements OnInit {
  videos = [
    {
      link: 'https://www.youtube.com/embed/tgbNymZ7vqY',
      thumb: 'assets/images/presenters/video-thumb-2.png'
    },
    {
      link: 'https://www.youtube.com/embed/_bZDjQOMf4U',
      thumb: 'assets/images/presenters/video-thumb-3.png'
    },
    {
      link: 'https://www.youtube.com/embed/ANyOZIcGvB8',
      thumb: 'assets/images/presenters/video-thumb-4.png'
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    // To shuffle video array
    this.videos = this.videos.sort(() => Math.random() - 0.5);
  }

  openDialog(url: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '700',
      height: '400',
      data: {url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}


@Component({
  selector: 'dialog-comp',
  templateUrl: 'dialog-comp.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
