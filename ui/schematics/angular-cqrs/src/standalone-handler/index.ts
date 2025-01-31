import { Rule } from '@angular-devkit/schematics';
import {generateFromFiles} from "@schematics/angular/utility/generate-from-files";
import {Schema as ServiceOptions} from "@schematics/angular/service/schema";

export default function (options: ServiceOptions): Rule {
  // This schematic uses an older method to implement the flat option
  const flat = options.flat;
  options.flat = true;

  return generateFromFiles(options, {
    'if-flat': (s: string) => (flat ? '' : s),
  });
}
