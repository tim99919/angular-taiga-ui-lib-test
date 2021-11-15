import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {databaseMockData} from './database-mock-data';
import {RequestService} from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ["./app.component.less"],
  providers: [RequestService, TuiDestroyService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  search: any = '';

  readonly group = new FormGroup(
    {
      control: new FormControl(databaseMockData[0])
    }
  )

  readonly control = new FormControl(databaseMockData[0]);

  constructor(@Inject(RequestService) readonly service: RequestService) {
  }
}
