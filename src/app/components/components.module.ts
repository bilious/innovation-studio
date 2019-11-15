import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PromptDialogComponent } from './common/prompt-dialog/prompt-dialog.component';
import { WorkitemComponent } from './stage/workitem/workitem.component';
import { WorkitemListComponent } from './stage/workitem-list/workitem-list.component';

// material modules
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';

// custom modules
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

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
    ],
    exports: [
        PromptDialogComponent,
        WorkitemComponent,
        WorkitemListComponent,
    ],
    entryComponents: [
        PromptDialogComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }