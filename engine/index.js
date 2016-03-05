if (module.hot) {
	module.hot.accept();
}

import Log from './core/log';
import UUID from './core/uuid';
import Input from './input/input';

let random = UUID.create();
let input = Input.create();

Log.write('Hi!!', random, input);