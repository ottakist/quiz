import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const {
    table,

    quiz,
    handleChange,
    handleSubmit,
    error,
  } = useGlobalContext();

  return (
    <section className='quiz quiz-small'>
      <form className='setup-form'>
        <h2>setup quiz</h2>
        <div className='form-control'>
          <label htmlFor='amount'>number of questions</label>
          <input
            type='number'
            className='form-input'
            id='amount'
            name='amount'
            onChange={handleChange}
            min={5}
            max={50}
            step={5}
            value={quiz.amount}
          />

          <label htmlFor='category'>category</label>
          <select
            onChange={handleChange}
            className='form-input'
            id='category'
            name='category'
          >
            {Object.entries(table).map((value, index) => {
              return (
                <option key={index} value={value[1]}>
                  {value[0]}
                </option>
              );
            })}
          </select>

          <label htmlFor='difficulty'>difficulty</label>
          <select
            className='form-input'
            id='difficulty'
            onChange={handleChange}
            name='difficulty'
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
          {error && (
            <p className='error'>
              can't generate questions,please try different options
            </p>
          )}
          <button type='submit' onClick={handleSubmit} className='submit-btn'>
            start
          </button>
        </div>
      </form>
    </section>
  );
};

export default SetupForm;
