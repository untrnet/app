import React from 'react'
import App from './App'
// import renderer from 'react-test-renderer'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// require('react-native-mock/mock')

configure({ adapter: new Adapter() })

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON()
//   expect(rendered).toBeTruthy()
// })

describe('Component: App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('Initialisation', () => {
    it('Renders successfully', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })
})
