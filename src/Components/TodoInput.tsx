import React from 'react';
import {Platform} from 'react-native'; // 교재에는 이부분이 누락되어 있어서 실제 렌더링에서는 UI가 깨져서 나타남
import styled from 'styled-components/native';

import Background from './Background';
import TextInput from './TextInput';

const Container = styled.KeyboardAvoidingView`
  position: absolute;
  top: 0;

  bottom: 0;
  left: 0;
  right: 0;
  justify-content: flex-end;
`;

interface Props {
  hideTodoInput: () => void;
}

const TodoInput = ({hideTodoInput}: Props) => {
  return (
    // 교재에는 behavior 부분의 내용이 누락되어 있어서 실제 렌더링에서는 UI가 깨져서 나타남
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Background onPress={hideTodoInput} />
      <TextInput hideTodoInput={hideTodoInput} />
    </Container>
  );
};

/**
 * 2019-11-22 발행된 교재
 * [ 스무디 한잔 마시며 끝내는 React Native ] 의 166 page의 내용중
 * Platform os 구분 해주는 부분이 없어서 android로 개발하다 보면
 * + 버튼 클릭 후 TextInput의 UI가 깨져서 나타난다.
 */

export default TodoInput;
