import { fireEvent, render, screen } from '@testing-library/react';
import Post from '../Post';
import PostComment from '../PostComments';
import test from 'node:test';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve permitir a inserção de dois comentários', () => {
        render(<Post children={undefined} imageUrl={''} />);
        
        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Primeiro comentário' } });
        fireEvent.click(screen.getByTestId('submit-button'));
        
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        
        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByTestId('submit-button'));
        
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});
