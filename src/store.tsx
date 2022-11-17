import create from 'zustand';

interface IStore {
	message: string;
	setMessage: (message: string) => void;
	colors: string[];
	setColors: (colors: string[]) => void;
	addColor: (color: string) => void;
	deleteColor: () => void;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		message: 'test in zustand',
		setMessage: (message) => set((state) => ({ ...state, message })),
		colors: ['blue', 'white', 'green', 'red'],
		setColors: (colors: string[]) => set((state) => ({ ...state, colors })),
		addColor: (color: string) =>
			set((state) => ({ ...state, colors: [...state.colors, color] })),
		deleteColor: () =>
			set((state) => ({ ...state, colors: state.colors.slice(0, -1) })),
	})
);
