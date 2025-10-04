import type React from 'react';

interface Props extends React.PropsWithChildren {
	title: string;
	value: string;
}

export const StatItem: React.FC<Props> = ({ children, title, value }) => (
	<div className="p-2 w-38 @md:w-50 grid grid-cols-[auto_1fr] h-fit gap-x-2 gap-y-2 items-center text-muted-foreground">
		<div className="p-1">{children}</div>
		<div className="text-base text-muted-foreground">{title}</div>
		<div className="text-foreground col-start-2 text-lg font-semibold">
			{value}
		</div>
	</div>
);
