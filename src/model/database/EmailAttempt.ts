import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Email } from './Email';

@Index('EmailId', ['emailId'], {})
@Index('Success', ['success'], {})
@Index('Created', ['created'], {})
@Entity('EmailAttempt')
export class EmailAttempt {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    id: number;

    @Column('int', { name: 'emailId' })
    emailId: number;

    @Column('tinyint', { name: 'success' })
    success: boolean;

    @Column('text', { name: 'message' })
    message: string;

    @Column('datetime', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
    created: Date;

    @ManyToOne(
        () => Email,
        (email) => email.emailAttempts,
        { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' },
    )
    @JoinColumn([{ name: 'emailId', referencedColumnName: 'id' }])
    email: Email;
}
