import {mount} from '@vue/test-utils'
import Header from "../../src/components/Header.vue";

describe('CorrectHeaderDisplayTest', () => {
    let today;
    const wrapper = mount(Header);

    beforeAll(() => {
        today = new Date();
    });

    it('Renders the correct date', () => {
        let date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    });
    it("Renders the correct year", () => {
        expect(wrapper.html()).toContain(today.getFullYear());
    });
    it("Renders the correct month", () => {
        let monthsInOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        expect(wrapper.html()).toContain(monthsInOrder[today.getMonth()].substring(0, 3).toUpperCase());
    });
    it("Render the correct day of the week", () => {
        let weekdaysInOrder = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        expect(wrapper.html()).toContain(weekdaysInOrder[today.getDay()].substring(0, 3).toUpperCase());
    })
});