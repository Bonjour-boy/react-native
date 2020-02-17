/**
 * @Author: lsl.
 * @Date: 2018/12/12
 * @Time: 11:39
 * @description: model的默认配置项
 * 配置项说明：
 * 1、扩展性：（1）定义的配置项，不使用true/false,使用0/1/2/3等可扩展类型；（2）随着新型号的增加，新型号的配置项会不断增加，适配方案：旧型号配置文件不变，扩展DefaultConfig，
 * 通过Object.assign来合并，以便达到导出的配置文件的配置项一致；（3）如果旧的配置项满足不了新需求，旧的配置项不能修改，解决方案：增加配置项
 * 2、不变性：（1）迭代更新、新型号适配时，只改对应型号的配置文件，旧的配置项不变，通过增加配置项来适配
 * 3、每个型号对应一个配置文件
 * 4、目的：提取不同型号之间的功能差别，通过配置文件的方式来适配，业务逻辑通过读取配置项来显示、处理相关逻辑
 */

export default {
	//支持的属性
    props:[],
    //是否是spec协议
    spec:true,
    //spec协议配置
    specConfig:[],
    // 是否有变温室
    hasChangeRoom:false,
    // 是否有智能模式
    hasSmartMode:false,
    // 是否有假日模式
    hasHolidayMode:false,
    // 是否有节能模式
    hasEnermyMode:false,
}