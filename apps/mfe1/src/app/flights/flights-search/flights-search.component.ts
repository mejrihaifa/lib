import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { AuthService } from "../../../../../../libs/auth/src/lib/auth.service";


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {

  public username: any;
  @ViewChild('vc', { read: ViewContainerRef, static: true })
  viewContainer: ViewContainerRef | undefined;

  // @ts-ignore
  constructor(@Inject(Injector ) private injector,authService: AuthService,
              // @ts-ignore
    @Inject(ComponentFactoryResolver) private cfr) {
    //console.log('user from authService', authService.userName);
    this.username = authService.userName;

  }

  search() {
    alert('Not implemented for this demo!');
  }

  async terms() {
    const comp = await import('../lazy/lazy.component').then(m => m.LazyComponent);

    const factory = this.cfr.resolveComponentFactory(comp);
    // @ts-ignore
    this.viewContainer.createComponent(factory, null, this.injector);
  }


}
