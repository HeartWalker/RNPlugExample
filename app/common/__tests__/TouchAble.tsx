import React from 'react'
import renderer from 'react-test-renderer'

import TouchAble  from '../TouchAble'

it('renders correctly with defaults', () => {
    const button = renderer.create(<TouchAble screen={'Test'} />).toJSON()
    expect(button).toMatchSnapshot()
})