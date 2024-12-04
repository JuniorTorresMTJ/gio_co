'use client';

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
      {/* Name Input */}
      <div className='relative flex items-center'>
        <Input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          aria-label='Name'
          required
        />
        <User className='absolute right-6' size={20} />
      </div>
      {/* Email Input */}
      <div className='relative flex items-center'>
        <Input
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          aria-label='Email'
          required
        />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* Message Textarea */}
      <div className='relative flex items-center'>
        <Textarea
          id='message'
          name='message'
          placeholder='Type Your Message Here.'
          value={formData.message}
          onChange={handleChange}
          aria-label='Message'
          required
        />
        <MessageSquare className='absolute top-4 right-6' size={20} />
      </div>
      {/* Submit Button */}
      <Button
        className='flex items-center gap-x-1 max-w-[166px]'
        type='submit'
        aria-label="Submit Form"
      >
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
      {/* Status Message */}
      {status === 'success' && (
        <p className='text-green-600 mt-4'>Your message has been sent successfully!</p>
      )}
      {status === 'error' && (
        <p className='text-red-600 mt-4'>There was an error sending your message. Please try again.</p>
      )}
    </form>
  );
};

export default Form;
