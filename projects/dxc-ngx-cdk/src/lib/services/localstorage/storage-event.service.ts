import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent as observableFromEvent, BehaviorSubject, Observable, Subscription } from 'rxjs';
import { share, filter } from 'rxjs/operators';

/**
 * Provides a service
 */
@Injectable({ providedIn: 'root' })
export class StorageEventService implements OnDestroy {

  private readonly _eventStream: BehaviorSubject<StorageEvent> = new BehaviorSubject<StorageEvent>(null);
  private readonly subscriptions = new Subscription();

  /**
   * Create e new instance.
   */
  constructor() {
    this.subscriptions.add(
      observableFromEvent<StorageEvent>(window, 'storage')
        .subscribe((ev: StorageEvent) => this._eventStream.next(ev))
    );
  }

  /**
   * Gets a stream of storage events.
   */
  public get stream(): Observable<StorageEvent> {
    return this._eventStream
      .asObservable().pipe(
        filter(ev => !!ev),
        share()
      );
  }

  /**
   * OnDestroy lifecycle hook. Clears the subscription.
   */
  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
