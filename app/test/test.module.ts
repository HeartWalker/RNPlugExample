import { inject, interfaces } from 'inversify';
import { DModule } from '../../AF/DModal';
import { ModuleBase, Scope } from '../../AF/moduleBase';
import { TestPresenter } from './test.presenter';
import { Tokens } from './test.token';
import TestComponent from './test.component';
import { TestService } from './test.service';

@DModule({
    imports: [],
    providers: [
        { provide: Tokens.TestService, useValue: TestService },
    ],
    //exports:[]
})
export class TestModule extends ModuleBase {
    constructor(
    //@inject(CommonTokens.NavigationService) private navigationService: NavigationService
    ) {
        super();
    }

    onModuleInit(): void {
        this.registerPresenter(TestPresenter, Tokens.TestPresenter, Scope.Singleton);
        //this.navigationService.registerActivity(ScreenConstants.Category, () => TestComponent, this.context);
    }
}
