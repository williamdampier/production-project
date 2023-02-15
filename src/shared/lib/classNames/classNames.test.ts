import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with one argument', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional classes', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with false mods', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames(
            'someClass',
            { hovered: false, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with undefined mod', () => {
        const expected = 'someClass class1 class2 scrollable';
        expect(classNames(
            'someClass',
            { hovered: undefined, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
