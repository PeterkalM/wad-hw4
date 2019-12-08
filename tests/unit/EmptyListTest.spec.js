import {mount} from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('EmptyListTest', () => {
    const wrapper = mount(List);

    it('has the correct text displayed', () => {
        expect(wrapper.props().list.length).toEqual(0);
        expect(wrapper.html()).toContain("Add your first Todo task")
    });

    it('does not have the text displayed when list has something in it', () => { //Mostly here to get that additional coverage
        const wrapper = mount(List,{propsData:{
            list: [{title:"Something",done:true}, {title:"Something else",done:false},{title:"Something else 2",done:false}]
            }});
        expect(wrapper.props().list.length).toEqual(3);
        expect(wrapper.html().indexOf("Add your first Todo task")).toEqual(-1) //I didn't find other ways of testing if html does not have a certain thing in it
    });
});