import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PromptDialogComponent } from '../../common/prompt-dialog/prompt-dialog.component';
import { async } from 'q';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.scss']
})
export class WorkitemComponent implements OnInit {

  @Input() dataWorkitem: any;
  @Input() level: any;
  // @Input() title: string;
  // @Input() checked: boolean;
  // @Input() ownerName: string;
  // @Input() public description: string;
  // @Output('onClick') triggerClick: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("content", {read: WorkitemComponent, static: false}) content: WorkitemComponent;

  public Editor = ClassicEditor;
  isChild: boolean;
  showExpand: boolean;
  isEditDesc: boolean;

  constructor(
    public dialog: MatDialog
  ) {
    this.showExpand = false;
    this.isChild = false;
    this.isEditDesc = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!(changes.dataWorkitem.currentValue && changes.dataWorkitem.currentValue.description)) {
      this.isEditDesc = true;
    }
  }

  // click expand icon
  onClickShowExpand() {
    this.showExpand = !this.showExpand;
  }

  // click description
  onClickDescEdit() {
    this.isEditDesc = true;
  }

  // click button save
  onClickDescSave() {
    if (this.dataWorkitem.description) {
      this.isEditDesc = false;
    }
  }

  // click title to change
  openChangeTitleDialog(): void {
    const dialogRef = this.dialog.open(PromptDialogComponent, {
      width: '600px',
      data: {title: 'Title', text: this.dataWorkitem.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataWorkitem.title = result;
    });
  }

  // click owner to change
  openChangeOwnerDialog(): void {
    const dialogRef = this.dialog.open(PromptDialogComponent, {
      width: '400px',
      data: {title: 'Owner', text: this.dataWorkitem.owner}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataWorkitem.owner = result;
    });
  }
}
