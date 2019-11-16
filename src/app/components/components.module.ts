import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// material modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

// custom modules
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PromptDialogComponent } from './common/prompt-dialog/prompt-dialog.component';
import { WorkitemComponent } from './stage/workitem/workitem.component';
import { WorkitemListComponent } from './stage/workitem-list/workitem-list.component';
import { AlertDialogComponent } from './common/alert-dialog/alert-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,

        // custom modules
        CKEditorModule,
        
        // material modules
        MatCheckboxModule,
        MatCardModule, 
        MatButtonModule,
        MatDialogModule
    ],
    declarations: [
        PromptDialogComponent,
        WorkitemComponent,
        WorkitemListComponent,
        AlertDialogComponent,
    ],
    exports: [
        WorkitemComponent,
        WorkitemListComponent,
    ],
    entryComponents: [
        PromptDialogComponent,
        AlertDialogComponent,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }