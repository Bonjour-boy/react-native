import { observable, action, decorate } from 'mobx';
import DataManager from "../../Viomi-plugin-sdk/DataManager/Spec";

import CommonAdapter from "../../Viomi-plugin-sdk/Adapter/CommonAdapter";
import DataAdapter from "../../Viomi-plugin-sdk/Adapter/DataAdapter";

class Action {
    constructor(root) {
        this.root = root;
    }

    /**
     * 设置数据
     * @param {*} datas 
     */
    setData(datas) {
        for (const key in datas) {
            this.root.state[key] = datas[key];
        }
    }

    /**
     * 设置设备状态
     * @param {*} method 
     * @param {*} params 
     * @param {*} callback 
     */
    setDevice(method, params, callback) {
        if (__DEV__) {
            const consoleData = {
                method: method,
                params: params
            }

            console.log(consoleData);
        }

        DataManager.stopPropsLoop();
        DataAdapter.callMethod(method, params, (isSuccess, result) => {
            DataManager.resumePropsLoop();
            if (callback) {
                callback(isSuccess, result)
            }
        });
    }

    /**
     * 设置模式
     * @param {*} value 
     */
    setMode(value) {
        this.root.state.Mode = value;
        //发送指令
        this.root.action.setDevice("set_properties", [{ "did": CommonAdapter.deviceId, "siid": 2, "piid": 4, "value": value }]);
    }
}


decorate(Action, {
    setData: action,
    setMode: action
})

export default Action;