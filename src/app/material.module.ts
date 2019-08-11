import { NgModule } from "@angular/core";

import {MatToolbarModule} from '@angular/material/toolbar';

const MaterialModules = [
    MatToolbarModule
];

@NgModule({

    imports: MaterialModules,
    exports: MaterialModules

})

export class MaterialModule {}