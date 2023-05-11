<?php

namespace App\Console\Commands;

use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Process;

class NikitaCommand extends Command
{
    protected $signature = 'nikita:run';

    protected $description = 'Command description';

    public function handle(): void
    {
        Process::run('npm run nikita');
    }
}
