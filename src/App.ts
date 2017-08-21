import { w, v } from '@dojo/widget-core/d';
import { DNode, WidgetProperties } from '@dojo/widget-core/interfaces';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import Matches from '@dojo/widget-core/meta/Matches';

export default class App extends WidgetBase<WidgetProperties> {

	private _selectedNode: string;

	protected handler(event: MouseEvent): void {
		if (this.meta(Matches).get('node1', event)) {
			this._selectedNode = 'node1';
		}
		else if (this.meta(Matches).get('node2', event)) {
			this._selectedNode = 'node2';
		}
		else if (this.meta(Matches).get('node3', event)) {
			this._selectedNode = 'node3';
		}
		this.invalidate();
	}

	protected render(): DNode {
		return v('div', { onclick: this.handler }, [
			this._selectedNode === 'node1' ? null : v('button', { key: 'node1' }, [ 'Node 1' ]),
			this._selectedNode === 'node2' ? null : v('button', { key: 'node2' }, [ 'Node 2' ]),
			this._selectedNode === 'node3' ? null : v('button', { key: 'node3' }, [ 'Node 3' ])
		]);

	}
}
