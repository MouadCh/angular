import { AsyncPipe } from './pipes/async_pipe';
import { UpperCasePipe } from './pipes/uppercase_pipe';
import { LowerCasePipe } from './pipes/lowercase_pipe';
import { JsonPipe } from './pipes/json_pipe';
import { SlicePipe } from './pipes/slice_pipe';
import { DatePipe } from './pipes/date_pipe';
import { DecimalPipe, PercentPipe, CurrencyPipe } from './pipes/number_pipe';
import { CONST_EXPR } from 'angular2/src/facade/lang';
export { AsyncPipe } from './pipes/async_pipe';
export { DatePipe } from './pipes/date_pipe';
export { JsonPipe } from './pipes/json_pipe';
export { SlicePipe } from './pipes/slice_pipe';
export { LowerCasePipe } from './pipes/lowercase_pipe';
export { NumberPipe, DecimalPipe, PercentPipe, CurrencyPipe } from './pipes/number_pipe';
export { UpperCasePipe } from './pipes/uppercase_pipe';
export const COMMON_PIPES = CONST_EXPR([
    AsyncPipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
    DatePipe
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvY29tbW9uL3BpcGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUtPLEVBQUMsU0FBUyxFQUFDLE1BQU0sb0JBQW9CO09BQ3JDLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCO09BQzdDLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCO09BQzdDLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CO09BQ25DLEVBQUMsU0FBUyxFQUFDLE1BQU0sb0JBQW9CO09BQ3JDLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CO09BQ25DLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUMsTUFBTSxxQkFBcUI7T0FDbkUsRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7QUFFbkQsU0FBUSxTQUFTLFFBQU8sb0JBQW9CLENBQUM7QUFDN0MsU0FBUSxRQUFRLFFBQU8sbUJBQW1CLENBQUM7QUFDM0MsU0FBUSxRQUFRLFFBQU8sbUJBQW1CLENBQUM7QUFDM0MsU0FBUSxTQUFTLFFBQU8sb0JBQW9CLENBQUM7QUFDN0MsU0FBUSxhQUFhLFFBQU8sd0JBQXdCLENBQUM7QUFDckQsU0FBUSxVQUFVLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxZQUFZLFFBQU8scUJBQXFCLENBQUM7QUFDdkYsU0FBUSxhQUFhLFFBQU8sd0JBQXdCLENBQUM7QUFFckQsYUFBYSxZQUFZLEdBQUcsVUFBVSxDQUFDO0lBQ3JDLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtDQUNULENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBwcm92aWRlcyBhIHNldCBvZiBjb21tb24gUGlwZXMuXG4gKi9cbmltcG9ydCB7QXN5bmNQaXBlfSBmcm9tICcuL3BpcGVzL2FzeW5jX3BpcGUnO1xuaW1wb3J0IHtVcHBlckNhc2VQaXBlfSBmcm9tICcuL3BpcGVzL3VwcGVyY2FzZV9waXBlJztcbmltcG9ydCB7TG93ZXJDYXNlUGlwZX0gZnJvbSAnLi9waXBlcy9sb3dlcmNhc2VfcGlwZSc7XG5pbXBvcnQge0pzb25QaXBlfSBmcm9tICcuL3BpcGVzL2pzb25fcGlwZSc7XG5pbXBvcnQge1NsaWNlUGlwZX0gZnJvbSAnLi9waXBlcy9zbGljZV9waXBlJztcbmltcG9ydCB7RGF0ZVBpcGV9IGZyb20gJy4vcGlwZXMvZGF0ZV9waXBlJztcbmltcG9ydCB7RGVjaW1hbFBpcGUsIFBlcmNlbnRQaXBlLCBDdXJyZW5jeVBpcGV9IGZyb20gJy4vcGlwZXMvbnVtYmVyX3BpcGUnO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuXG5leHBvcnQge0FzeW5jUGlwZX0gZnJvbSAnLi9waXBlcy9hc3luY19waXBlJztcbmV4cG9ydCB7RGF0ZVBpcGV9IGZyb20gJy4vcGlwZXMvZGF0ZV9waXBlJztcbmV4cG9ydCB7SnNvblBpcGV9IGZyb20gJy4vcGlwZXMvanNvbl9waXBlJztcbmV4cG9ydCB7U2xpY2VQaXBlfSBmcm9tICcuL3BpcGVzL3NsaWNlX3BpcGUnO1xuZXhwb3J0IHtMb3dlckNhc2VQaXBlfSBmcm9tICcuL3BpcGVzL2xvd2VyY2FzZV9waXBlJztcbmV4cG9ydCB7TnVtYmVyUGlwZSwgRGVjaW1hbFBpcGUsIFBlcmNlbnRQaXBlLCBDdXJyZW5jeVBpcGV9IGZyb20gJy4vcGlwZXMvbnVtYmVyX3BpcGUnO1xuZXhwb3J0IHtVcHBlckNhc2VQaXBlfSBmcm9tICcuL3BpcGVzL3VwcGVyY2FzZV9waXBlJztcblxuZXhwb3J0IGNvbnN0IENPTU1PTl9QSVBFUyA9IENPTlNUX0VYUFIoW1xuICBBc3luY1BpcGUsXG4gIFVwcGVyQ2FzZVBpcGUsXG4gIExvd2VyQ2FzZVBpcGUsXG4gIEpzb25QaXBlLFxuICBTbGljZVBpcGUsXG4gIERlY2ltYWxQaXBlLFxuICBQZXJjZW50UGlwZSxcbiAgQ3VycmVuY3lQaXBlLFxuICBEYXRlUGlwZVxuXSk7XG4iXX0=