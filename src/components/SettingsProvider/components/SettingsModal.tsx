import type React from 'react';

import type { SettingsDto } from '@/types';

import { SettingsForm } from '@/components/SettingsProvider/components/SettingsForm';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/shadcn/components';

interface Props {
	onClose: () => void;
	open: boolean;
	settings: SettingsDto;
}

export const SettingsModal: React.FC<Props> = ({ onClose, open, settings }) => (
	<Dialog onOpenChange={onClose} open={open}>
		<DialogContent className="max-w-lg [&>button]:hidden pb-3">
			<DialogHeader className="text-left">
				<DialogTitle>Settings</DialogTitle>
			</DialogHeader>
			<DialogDescription className="hidden">
				Set up your preferences and configurations here.
			</DialogDescription>
			<SettingsForm settings={settings} />
		</DialogContent>
	</Dialog>
);
