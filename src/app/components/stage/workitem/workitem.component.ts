import { Component, OnInit, Input, Output, EventEmitter, ViewChild, SimpleChanges, OnChanges } from '@angular/core';
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
export class WorkitemComponent implements OnInit, OnChanges {

  @Input() dataWorkitem: any;
  @Input() level: any;
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

  /**
   * Click event - Expand / Collapse icon button
   * Show and hide work item detail
   */
  onClickShowExpand() {
    this.showExpand = !this.showExpand;
  }

  /**
   * Click event - Description text
   * Show WYSIWYG to edit rich text and edit description
   */
  onClickDescEdit() {
    this.isEditDesc = true;
  }

  /**
   * Click event - Save button
   * Save edited description of work item
   */
  onClickDescSave() {
    if (this.dataWorkitem.description) {
      this.isEditDesc = false;
    }
  }

  /**
   * Click event - Title text
   * Show dialog to change title, and click OK / Cancel
   */
  openChangeTitleDialog(): void {
    const dialogRef = this.dialog.open(PromptDialogComponent, {
      width: '600px',
      data: {title: 'Title', text: this.dataWorkitem.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataWorkitem.title = result;
    });
  }

  /**
   * Click event - Owner text
   * Show dialog to change Ownername, and click OK / Cancel
   */
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
