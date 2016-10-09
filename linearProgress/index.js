import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class LinearProgress
 * @extend Component
 * @param {object}                  options.data                     =  绑定属性
 * @param {number=0}                options.data.percent             => 百分比
 * @param {string}                  options.data.size                => 进度条的尺寸
 * @param {string}                  options.data.state               => 进度条的状态
 * @param {boolean=false}           options.data.striped             => 是否显示条纹
 * @param {boolean=false}           options.data.active              => 进度条是否为激活状态，当`striped`为`true`时，进度条显示动画
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const LinearProgress = Component.extend({
    name: 'linearProgress',
    template,
    /**
     * @protected
     * @override
     */
    config() {
        this.defaults({
            percent: 0,
            size: undefined,
            state: undefined,
            striped: false,
            active: false,
        });
        this.supr();
    },
});

export default LinearProgress;
