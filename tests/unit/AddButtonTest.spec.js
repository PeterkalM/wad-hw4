import { mount } from '@vue/test-utils'
import Footer from "../../src/components/Footer.vue";

describe('AddButtonTest', () => {
    // creating a wrapper for Footer and setting 'open' to be false just in case (default is false)
    const wrapper = mount(Footer, {
        propsData: {
            open: false
        }
    });
    // test
    it('"Open" property changes to true when "+" is clicked', () => {
        wrapper.find('span').trigger('click'); // clicking the "+" button in the HTML span divider
        const status = wrapper.vm.$data['open']; // getting the "open" property status from the wrapper
        expect(status).toBe(true) // checking if the result is as expected
    })
});