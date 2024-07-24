'use client'
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Input, TextInput } from '@mantine/core';

export const AddBook = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Add Book">
        <form>
          <TextInput label='Book Title' />
          <TextInput label='Topic' />
          <Button type='submit' className='mx-10 my-2'>Add Book</Button>
        </form>
      </Drawer>

      <Button color='orange' onClick={open}>Add Book +</Button>
    </>
  );
}