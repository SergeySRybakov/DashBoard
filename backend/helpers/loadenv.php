<?php

$ENV_FILENAME = __DIR__ . '/../.env';

if ( file_exists( $ENV_FILENAME ) ) {
  $envs = explode("\n", file_get_contents( $ENV_FILENAME ) );

  foreach ( $envs as $env ) {
    @putenv( $env );
  }
}
