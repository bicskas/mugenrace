<?php

namespace App;

use App\Traits\BasicModel;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;
    use BasicModel;
    use SoftDeletes;

    const ADMIN_TYPE = 'admin';
    const MODERATOR_TYPE = 'moderator';
    const USER_TYPE = 'user';
    const DEFAULT_TYPE = 'user';


    // orderByRaw, külön be kell állítani lekérdezésnél!
    public static $sorting = '`name` ASC';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'editable' => 'boolen',
    ];

    private $enum = array(
        'role' => array(self::ADMIN_TYPE, self::MODERATOR_TYPE, self::USER_TYPE),
        'status' => array('new', 'active', 'banned', 'deleted'),
    );


    /**
     * @return bool
     */
    public function hasVerifiedEmail()
    {
        return (!is_null($this->email_verified_at) or $this->isActive());
    }


    /**
     * @return bool
     */
    public function markEmailAsVerified()
    {
        return $this->forceFill([
            'email_verified_at' => $this->freshTimestamp(),
            'status' => 'active',
        ])->save();
    }

    /**
     * @return bool
     */
    public function isActive()
    {

        return $this->status === 'active';
    }

    /**
     * @return bool
     */
    public function isAdmin()
    {
        return $this->role === self::ADMIN_TYPE;
    }

    /**
     * @return bool
     */
    public function isModerator()
    {
        return $this->role === self::ADMIN_TYPE or $this->role === self::MODERATOR_TYPE;
    }


    public static function getRoles()
    {
        $roles = array(
            self::ADMIN_TYPE => __(self::ADMIN_TYPE),
            self::MODERATOR_TYPE => __(self::MODERATOR_TYPE),
            self::USER_TYPE => __(self::USER_TYPE)
        );
        return $roles;
    }


}
