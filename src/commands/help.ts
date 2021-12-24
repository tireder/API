import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '🔨 `f! accept <bot> <reason>` -> accept bot user with reason\n' +
            '🅰 `f! add-badge <bot> <badge_name>` -> add a badge to a bot\n' +
            '🅰 `f! clear-badges <bot>` -> clear badges from a bot\n' +
            '🅰 `f! delete <bot> <reason>` -> delete a bot from the list\n' +
            '🔨 `f! decline <bot> <reason>` -> decline bot user with reason\n' +
            '🔨 `f! help` -> show this\n' +
            '✅ `f! ping` -> `f! ping` -> pong!\n' +
            '🔨 `f! q` -> show approval queue');
    }
}
