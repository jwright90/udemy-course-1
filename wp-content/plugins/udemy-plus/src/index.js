import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'

console.log('hello console');

registerBlockType(block.name, {
  edit() {
    return <p>Hello Udemy</p>
  }
});

