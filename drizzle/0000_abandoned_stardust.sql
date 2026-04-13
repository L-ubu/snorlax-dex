CREATE TABLE `cards` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`set` text NOT NULL,
	`set_year` integer NOT NULL,
	`card_number` text NOT NULL,
	`language` text NOT NULL,
	`variant` text NOT NULL,
	`rarity` text,
	`category` text NOT NULL,
	`image_url` text,
	`notes` text
);
--> statement-breakpoint
CREATE TABLE `collection` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`card_id` integer NOT NULL,
	`user_id` text DEFAULT 'default' NOT NULL,
	`owned` integer DEFAULT false NOT NULL,
	FOREIGN KEY (`card_id`) REFERENCES `cards`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `collection_card_id_user_id_unique` ON `collection` (`card_id`,`user_id`);