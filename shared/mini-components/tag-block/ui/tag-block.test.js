import { render, screen } from '@testing-library/react';
import TagBlock from './tag-block.jsx';

describe('TagBlock Component', () => {
  it('renders the component correctly', () => {
    // Подготовка: передаем дочерние элементы
    render(
      <TagBlock>
        <span>Test Content</span>
      </TagBlock>
    );

    // Проверка: элемент с текстом Test Content отображается
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    // Проверка: дочерний элемент находится внутри div с классом styles.tagBlock
    const parentDiv = screen.getByText('Test Content').closest('div');
    expect(parentDiv).toHaveClass('tagBlock');
  });
});
