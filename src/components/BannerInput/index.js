import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const ref = useRef();
  const { defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
        ref: ref.current,
        path: 'dataset.file'
      });
    }
    // eslint-disable-next-line
    }, [ref.current]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('banner', e.target.files[0]);

    const response = await api.post('banners', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="banner">
        <img
          src={preview || 'https://rocketseat.com.br/static/og.png'}
          alt="Preview"
        />

        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
