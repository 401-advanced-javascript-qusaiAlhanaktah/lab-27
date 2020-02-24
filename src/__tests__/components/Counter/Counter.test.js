import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../../../components/Counter/Counter.js';

describe('<Counter />', ()=>{
    it('exists at the start of our application',()=>{
        let app = shallow(<Counter />);
        expect(app.find('h3').exists()).toBeTruthy();
    });
    it('increment the state on click',()=>{
        // let app = mount(<Counter />);
        // let button = app.find('buuton1');
        // console.log(button)
        // button.simulate('click');
        // expect(app.counter).toBe(1)
    });
    it('renders correctly', () => {
        const tree = renderer.create(<Counter />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});