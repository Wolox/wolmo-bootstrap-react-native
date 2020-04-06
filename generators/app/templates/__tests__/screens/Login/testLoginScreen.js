import React from 'react';
import { shallow } from 'enzyme';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import { Login } from '@screens/Login/layout';
import renderer from 'react-test-renderer';

describe('<Login />', () => {
  test('without errors', () => {
    const onLogin = jest.fn();
    const wrapper = shallow(<Login onLogin={onLogin} />);
    expect(wrapper.find(CustomTextInput)).toHaveLength(2);
    expect(wrapper.find(CustomButton)).toHaveLength(1);
  });
  test('Login Snapshot', () => {
    const onLogin = jest.fn();
    const tree = renderer.create(<Login onLogin={onLogin} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
