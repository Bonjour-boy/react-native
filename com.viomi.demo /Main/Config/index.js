import CommonAdapter from '../../Viomi-plugin-sdk/Adapter/CommonAdapter';
import Models from './Models';

import DefaultConfig from './DefaultConfig';
import b1 from './b1';
import b2 from './b2';



let Config = {};
Object.assign(Config, DefaultConfig)

// CommonAdapter.deviceModel = "viomi.fridge.b1";
switch (CommonAdapter.deviceModel) {
	case Models.b1:
		Object.assign(Config, b1);
		break;
	case Models.b2:
		Object.assign(Config, b2);
		break;
	default:
		Object.assign(Config, b1);
		break;
}

export default Config;
