import { Component } from 'rgui-ui-base';
import template from './index.rgl';

/**
 * @class CircularProgress
 * @extends Component
 * @param {Object}                  options.data                     =  绑定属性
 * @param {number=0}                options.data.percent             => 百分比
 * @param {string}                  options.data.size                => 进度条的尺寸
 * @param {string}                  options.data.state               => 进度条的状态
 * @param {boolean=true}            options.data.visible             => 是否显示
 * @param {string=''}               options.data.class               => 补充class
 */
const CircularProgress = Component.extend({
    name: 'circularProgress',
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
            // @TODO striped: false,
            // @TODO active: false,
            _radius: 45,
        });
        this.supr();
    },
});

export default CircularProgress;
