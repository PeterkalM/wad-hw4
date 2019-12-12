import { mount } from '@vue/test-utils'
import List from "../../src/components/List.vue";

describe('MarkItemDoneTest', () => {
    const wrapper = mount(List, {
        propsData: {
            list: [
                {
                    title: "Task1",
                    done: false
                },
                {
                    title: "Task2",
                    done: true
                }]
        }
    });

    it("check if item is updated correctly when it is marked done", () => {
        expect(wrapper.vm.list[0].done).toEqual(false);
        expect(wrapper.vm.list[1].done).toEqual(true);
        wrapper.find(".list-item:first-of-type span").trigger("click");
        wrapper.find(".list-item:nth-of-type(2) span").trigger("click");
        expect(wrapper.vm.list[0].done).toEqual(true);
        expect(wrapper.vm.list[1].done).toEqual(false);
    });
});