import create from 'zustand';

interface IStore {
	message: string;
	setMessage: (message: string) => void;
}

export const useStore = create<IStore>(
	(set): IStore => ({
		message: 'test in zustand',
		setMessage: (message) =>
			set((state) => ({ ...state, message })),
	})
);
